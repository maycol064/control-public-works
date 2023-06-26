import { useEffect, useState } from "react"
import { useAppSelector } from "./useAppSelector";
import { selectAuth } from "@/store/auth/slice";
import { Dependencies, Dependency } from "@/interfaces";
import { getDependencies } from "@/helpers";

export const useTableDependencies = () => {
  const {token} = useAppSelector(selectAuth); 
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<Dependency[] | []>([])

  useEffect(() => {
    const getData = async () => {
      if(token === undefined) return;
      const response = await getDependencies(token);
      const { data, status } = response;
      if(status === 200)
        setData(data.data);
        setLoading(false);
    }
    getData();

  }, [token])
  
  return {
    data, 
    loading
  }
}
