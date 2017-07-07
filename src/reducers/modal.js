const initialState = {
  currentModal: null,
  modalIsOpen: false
};

export default function modal(state = initialState, action) {
  switch (action.type) {
    case "OPEN_MODAL":
      return {
        ...state,
        modalIsOpen: true,
        currentModal: action.modal.selectedModal
      };

    case "CLOSE_MODAL":
      return {
        ...state,
        modalIsOpen: false,
        currentModal: null
      };

    default:
      return state;
  }
}
