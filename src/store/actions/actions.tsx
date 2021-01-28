export const UPDATE_VIEWS = "UPDATE_VIEWS";

export default function updateViews(view: string) {
  return {
    type: UPDATE_VIEWS,
    view: view
  }

};
