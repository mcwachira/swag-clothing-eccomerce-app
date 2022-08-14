import {createSelector} from 'reselect'

const selectCategoriesReducer = (state) => state.categories;

export const selectCategories = createSelector(
    [selectCategoriesReducer],
    (categoriesSlice) => categoriesSlice.categories 
)

//caching our categories state
export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories) =>
categories.reduce((acc, { title, items }) => {
      
        acc[title.toLowerCase()] = items;
        return acc;
    }, {})

)

export const selectCategoriesIsLoading = createSelector(
    [selectCategories],
    (categoriesSlice) => categoriesSlice.isLoading
)