import { useEffect } from "react";

export default function useCustom(count) {
  useEffect(() => {
    document.title = `Count : ${count}`;
  }, [count]);
}
