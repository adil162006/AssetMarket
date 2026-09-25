import type { AppDispatch } from "@/redux/store"
import { setLoading, setUser } from "@/redux/userSlice"
import type { IUser } from "@/types/user"
import api from "@/utils/axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

export const useGetCurrentUser = () => {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.get("/api/me")

        if (response.data.success) {
          const currUser: IUser = response.data.user
          dispatch(setUser(currUser))
        }
      } catch (error) {
        console.log(error)

        // 401 → user isn't logged in
        dispatch(setUser(null))
      } finally {
        // Runs whether request succeeds or fails
        dispatch(setLoading(false))
      }
    }

    fetchUser()
  }, [dispatch])
}