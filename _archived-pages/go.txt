import { useEffect } from "react"
import { useRouter } from "next/router"

export default function go () {

  const router = useRouter();

  useEffect(() => {
    router.push('/Login');
  })

  return <div></div>
}
