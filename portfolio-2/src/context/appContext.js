import { createContext } from "react";
import { pages, experiences, contact, profile, projects } from "../data/site";

export const pagesContext = createContext(pages);
export const experiencesContext = createContext(experiences);
export const contactsContext = createContext(contact);
export const profileContext = createContext(profile);
export const projectsContext = createContext(projects);

export const themeContext = createContext({
    theme: "light",
    toggleTheme: () => {},
});
