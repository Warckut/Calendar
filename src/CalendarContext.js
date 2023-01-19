import { createContext, useContext, useReducer } from "react";
import CalendarReducer, { intialState } from "./CalendarReducer";

const CalendarContext = createContext(intialState);

export const CalendarProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CalendarReducer, intialState);

    const addInterview = (date) => {
        const updatedInterviews = state.interviews.concat(date);
        dispatch({
            type: "ADD_INTERVIEW",
            payload: {
                interviews: updatedInterviews
            }
        }) 
    }

    const removeInterview = (date) => {
        const updatedInterviews = state.interviews
            .filter((currentInterview) => currentInterview !== date)
        dispatch({
            type: "REMOVE_INTERVIEW",
            payload: {
                interviews: updatedInterviews
            }
        })
    }
    const value = {
        interviews: state.interviews,
        addInterview,
        removeInterview
    }

    return <CalendarContext.Provider value={value}>{children}</CalendarContext.Provider>
}

const useCalendar = () => {
    const context = useContext(CalendarContext);
    // if (context === undefined) {
    //     throw new Error("useShop must be used within ShopContext");
    // }
    return context;
}
 
export default useCalendar;