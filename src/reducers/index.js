import { combineReducers } from 'redux';

import ModalReducer from './modal';
import OrganizationsReducer from './organizations';

const rootReducer = combineReducers({
  modal: ModalReducer,
  organizations: OrganizationsReducer
});

export default rootReducer;
