import { createContext } from "react";

// define type for context's value
export interface ExpandedContextType {
    expanded: boolean;
    toggleExpanded: () => void;
    toggleCollapsed: () => void;
}

// create context w/ a default value\
export const ExpandedContext = createContext<ExpandedContextType>({
    expanded: true,
    toggleExpanded: () => {},
    toggleCollapsed: () => {},
});