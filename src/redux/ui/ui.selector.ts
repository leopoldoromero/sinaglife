import { RootState } from '../store';
import { UIState } from './ui.slice';

export const selectUIState = (state: RootState): UIState => state.ui;
