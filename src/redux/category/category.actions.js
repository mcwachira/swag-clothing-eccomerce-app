import { CATEGORIES_ACTION_TYPE } from "./category.types.js";
import { createAction } from "../../utils/reducer/createAction"


export  const setCategoriesMap = (categoryMap) => createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES_MAP, categoryMap)





