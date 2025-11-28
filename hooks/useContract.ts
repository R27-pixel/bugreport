"use client"

import { useState, useEffect } from "react"
import { useAccount, useReadContract, useWriteContract, useWaitForTransactionReceipt } from "wagmi"
import { contractABI, contractAddress } from "@/lib/contract"

export interface ReportData {
  reporter: string
  description: string
  timestamp: bigint
}

export interface ContractData {
  reportCount: number
  reports: ReportData[]
}

export interface ContractState {
  isLoading: boolean
  isPending: boolean
  isConfirming: boolean
  isConfirmed: boolean
  hash: `0x${string}` | undefined
  error: Error | null
}

export interface ContractActions {
  submitReport: (description: string) => Promise<void>
  fetchReport: (reportId: number) => Promise<void>
}

export const useReportContract = () => {
  const { address } = useAccount()
  const [isLoading, setIsLoading] = useState(false)
  const [reports, setReports] = useState<ReportData[]>([])

  const { data: reportCount, refetch: refetchReportCount } = useReadContract({
    address: contractAddress,
    abi: contractABI,
    functionName: "getReportCount",
  })

  const { writeContractAsync, data: hash, error, isPending } = useWriteContract()

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  })

  useEffect(() => {
    if (isConfirmed) {
      refetchReportCount()
    }
  }, [isConfirmed, refetchReportCount])

  const submitReport = async (description: string) => {
    if (!description) return

    try {
      setIsLoading(true)
      await writeContractAsync({
        address: contractAddress,
        abi: contractABI,
        functionName: "submitReport",
        args: [description],
      })
    } catch (err) {
      console.error("Error submitting report:", err)
      throw err
    } finally {
      setIsLoading(false)
    }
  }

  const fetchReport = async (reportId: number) => {
    // This would typically use useReadContract, but for demonstration
    // we'll leave it as a placeholder for fetching individual reports
    console.log("Fetching report:", reportId)
  }

  const data: ContractData = {
    reportCount: reportCount ? Number(reportCount as bigint) : 0,
    reports,
  }

  const actions: ContractActions = {
    submitReport,
    fetchReport,
  }

  const state: ContractState = {
    isLoading: isLoading || isPending || isConfirming,
    isPending,
    isConfirming,
    isConfirmed,
    hash,
    error,
  }

  return {
    data,
    actions,
    state,
  }
}