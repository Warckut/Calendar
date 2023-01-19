export const intialState = {
    interviews: []
}

const CalendarReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case "ADD_INTERVIEW":
            return {
                ...state,
                interviews: payload.interviews
            }
        case "REMOVE_INTERVIEW":
            return {
                ...state,
                interviews: payload.interviews
            }
    }
};

export default CalendarReducer;