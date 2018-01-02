import { ActionConst } from "react-native-router-flux";

const initialSate = {
  scene: {}
};

export default function reducer(state = initialSate, action = {}) {
  switch (action.type) {
    // focus action is dispatched when a new screen comes into focus
    case ActionConst.FOCUS:
      return {
        ...state,
        scene: action.scene
      };

    // ...other actions

    default:
      return state;
  }
}
