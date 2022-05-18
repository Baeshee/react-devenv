// Define all your actions as an export with the pointer as export name
// and as string.
export const actionPointer = "actionPointer"

// Change actionName to the name you want to name your action
// Define a payloadName and replace, also replace the actionPointer
// to the name of the pointer you assigned to your action
export const actionName = payloadName => ({
    type: actionPointer,
    payload: payloadName,
})
