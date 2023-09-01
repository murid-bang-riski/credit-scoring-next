import { useLocation } from "react-router-dom";
import { useEffect, useCallback, DependencyList } from "react";

/**
 * Debounce Function.
 * @constructor
 * @param {any} effect - Effect of Debounce
 * @param {DependencyList} dependencies - Dependencies of Effect
 * @param {number} delay - Delay of timer
 * @abstract
 * useDebounce(
    () => {
      setSearch(debounceSearch);
    },
    [debounceSearch], 
    800,
  );
 */

export function useDebounce(
  effect: VoidFunction,
  dependencies: DependencyList,
  delay: number,
): void {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const callback = useCallback(effect, dependencies);

  useEffect(() => {
    const timeout = setTimeout(callback, delay);
    return () => clearTimeout(timeout);
  }, [callback, delay]);
}

export const useQueryParams = () => new URLSearchParams(useLocation().search);
