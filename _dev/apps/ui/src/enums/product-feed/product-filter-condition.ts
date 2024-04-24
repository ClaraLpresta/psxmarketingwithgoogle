export enum ProductFilterNumericConditions {
  IS_EQUAL_TO = 'isEqualTo',
  IS_LESS_THAN = 'isLessThan',
  IS_GREATER_THAN = 'isGreaterThan',
}

export enum ProductFilterNumericArrayConditions {
  IS_EQUAL_TO = 'isEqualTo',
  IS_NOT_EQUAL_TO = 'isNotEqualTo',
}

// TODO: c'est pas propre...
export enum ProductFilterStringConditions {
  CONTAINS = 'contains',
  NOT_CONTAIN = 'notContain',
  IS_IN = 'isIn',
  IS_NOT = 'isNot'
}

export enum ProductFilterMultiSelectConditions {
  IS_IN = 'isIn',
  IS_NOT = 'isNot'
}

export enum ProductFilterBooleanConditions {
  IS_FALSE = 'false',
  IS_TRUE = 'true',
}

export enum ProductFilterFieldConditions {
  NUMERIC = 'numeric',
  NUMERIC_ARRAY = 'numericArray',
  STRING = 'string',
  MULTI_SELECT = 'multiSelect',
}

export enum ProductFilterConditionApi {
  IS = 'is',
  IS_NOT = 'is_not',
  LOWER = 'lower',
  GREATER = 'greater',
  CONTAINS = 'contains',
  DOES_NOT_CONTAIN = 'does_not_contain',
}

export default {
  ProductFilterNumericConditions,
  ProductFilterNumericArrayConditions,
  ProductFilterStringConditions,
  ProductFilterMultiSelectConditions,
  ProductFilterBooleanConditions,
  ProductFilterFieldConditions,
  ProductFilterConditionApi,
};
