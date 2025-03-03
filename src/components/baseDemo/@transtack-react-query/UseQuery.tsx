// import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

export function UseQueryPage() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["getUser"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
        res.json()
      ),
  });

  console.log("data: ", data);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      {JSON.stringify(data)}
    </>
  );
  // const { data, error, isLoading } = useQuery({
  //   queryKey: ["testUseQuery"],
  //   queryFn: fetchData,
  // });

  // useEffect(() => {
  //   console.log("data", data);
  //   console.log("error", error);
  //   console.log("isLoading", isLoading);
  // }, [data, error, isLoading]);
  // async function fetchData() {
  //   const api = "https://randomuser.me/api/";
  //   try {
  //     const res = await fetch(api);
  //     return await res.json();
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }

  // return <div>123 </div>;
}
