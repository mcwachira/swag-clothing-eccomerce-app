import { createSelector } from "reselect"



export const selectCategoryReducer = (state) => state.categories.categories

export const selectCategoryIsLoading = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.isLoading
)