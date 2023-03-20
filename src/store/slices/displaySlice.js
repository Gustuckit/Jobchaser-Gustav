import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    value: {}
}

const displaySlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        display: (state, action) => {
            // let template = [
            //     {
            //         "name": "John Doe",
            //         "age": 30,
            //         "city": "New York",
            //     },
            //     {
            //         "name": "Jane Doe",
            //         "age": 25,
            //         "city": "Boston",
            //     }
            // ]
            // state.value = template
            fetch("./src/store/slices/data.json")
                .then((res) => res.json())
                .then((data) => {
                    state = data
                    console.log(state)
                })
        }
    }
})

export const { display } = displaySlice.actions
export default displaySlice.reducer