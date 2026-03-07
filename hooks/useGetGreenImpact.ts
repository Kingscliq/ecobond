import { useReadContract } from "wagmi";
import { projectModContract } from "../lib/projectModContract";

export function useGetGreenImpact() {
  const { data: greenImpact } = useReadContract({
    ...projectModContract,
    functionName: "getProjectScores",
  });

  return greenImpact;
}
