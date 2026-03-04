import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { projectModContract } from "../lib/projectModContract";

const apiKey = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY;

// Cache to store projects data globally
let cachedProjects: any = null;
let cacheTimestamp: number = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export default function useProjects() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const hasInitialized = useRef(false);

  useEffect(() => {
    // Prevent multiple initializations
    if (hasInitialized.current) return;
    hasInitialized.current = true;

    const fetchProjects = async () => {
      // Check if cache is still valid
      if (cachedProjects && Date.now() - cacheTimestamp < CACHE_DURATION) {
        setData(cachedProjects);
        return;
      }

      setLoading(true);
      try {
        const config = {
          method: "get" as const,
          url: `https://eth-sepolia.g.alchemy.com/nft/v3/${apiKey}/getNFTsForContract?contractAddress=${projectModContract.address}&withMetadata=true`,
        };

        const response = await axios(config);
        cachedProjects = response.data;
        cacheTimestamp = Date.now();
        setData(response.data);
        setError(null);
      } catch (err) {
        setError(err);
        console.error("Error fetching projects:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { data, loading, error };
}
