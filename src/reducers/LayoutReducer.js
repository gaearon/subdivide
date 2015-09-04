import {
  SPLIT,
  JOIN,
  SET_SPLIT_RATIO,
  SET_SIZE,
  SET_MODE,
  SET_BLOCK
} from '../constants/BlenderLayoutConstants';

import { Record, List, Map} from 'immutable';

import {
  split,
  join,
  setSplitRatio,
  setSize,
  setMode,
  setBlock
} from '../helpers/LayoutHelper';

export const Pane = new Record({
  id: '0',
  childIds: List(),
  isGroup: false,
  direction: undefined,
  parentId: undefined,
  splitRatio: 1
});

export const Layout = new Record({
  rootId: '0',
  dividerSize: 1,
  mode: undefined,
  splitJoinId: undefined,
  splitStartX: undefined,
  splitStartY: undefined,
  displayBlock: false,
  width: 800,
  height: 600,
  panes: Map({
    '0': new Pane()
  })
});

const initialState = new Layout();



export default function LayoutReducer(state = initialState, action) {

  switch (action.type) {
  case SPLIT:
    return split(state, action);

  case JOIN:
    return join(state, action);

  case SET_SPLIT_RATIO:
    return setSplitRatio(state, action);

  case SET_SIZE:
    return setSize(state, action);

  case SET_MODE:
    return setMode(state, action);

  case SET_BLOCK:
    return setBlock(state, action);

  default:
    return state;
  }
}
