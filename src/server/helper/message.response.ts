export const createMessageGetSuccess = (model: string): string =>
    `${model} retrieved successfully.`;

export const createMessageGetError = (model: string): string =>
    `Failed to retrieve ${model}.`;

export const createMessageGetLengthSuccess = (model: string): string =>
    `Successfully retrieved the length of ${model}.`;

export const createMessageGetLengthError = (model: string): string =>
    `Failed to retrieve the length of ${model}.`;

export const createMessageGetUniqueSuccess = (
    model: string,
    unique: string,
): string => `${model} with ${unique} retrieved successfully.`;

export const createMessageGetUniqueError = (
    model: string,
    unique: string,
): string => `Failed to retrieve ${model} with ${unique}.`;

export const createMessagePostSuccess = (model: string): string =>
    `${model} created successfully.`;

export const createMessagePostError = (model: string): string =>
    `Failed to create ${model}.`;

export const createMessagePutSuccess = (model: string): string =>
    `${model} updated successfully.`;

export const createMessagePutError = (model: string): string =>
    `Failed to update ${model}.`;

export const createMessagePatchSuccess = (model: string): string =>
    `${model} partially updated successfully.`;

export const createMessagePatchError = (model: string): string =>
    `Failed to partially update ${model}.`;

export const createMessageDeleteSuccess = (model: string): string =>
    `${model} deleted successfully.`;

export const createMessageDeleteError = (model: string): string =>
    `Failed to delete ${model}.`;

export const createMessagePercentageSuccess = (model: string): string =>
    `${model} percentage comparison calculated successfully.`;

export const createMessagePercentageError = (model: string): string =>
    `Failed to calculate percentage comparison for ${model}.`;

export const createMessageGetStatsSuccess = (model: string): string =>
    `Successfully retrieved the stats of ${model}.`;

export const createMessageGetStatsError = (model: string): string =>
    `Failed to retrieve the stats of ${model}.`;
