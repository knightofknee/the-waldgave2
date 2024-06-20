import { useEffect } from "react"
import { useRouter } from "next/router"

export default function login () {

  const router = useRouter();

  useEffect(() => {
    router.push('/Login');
  })

  return <div></div>
}
