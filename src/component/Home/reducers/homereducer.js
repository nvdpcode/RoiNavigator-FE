import { INPUT_DATA } from "../actions/actions";
import { SET_FORM_DATA, UPDATE_INPUT } from '../actions/actions';

const initialState1 = {
     Drawer:false
  };

const initialState = {
    inputsdata: {
      roiName: '',
      customerName: '',
      contactName: '',
      numberOfEps: '',
      licenceTerm: {
        "industryAvg":1
      },
      noOfEps:{
        "industryAvg":1
      },
      licensePrice: '',
      addOnPrice: '',
      Implementationandtraining: '',
      residentPs:'',
      date:"2024/11/03"
    },
  };
export const HomeReducer = (state = initialState1, action) => {
    switch (action.type) {
      case "DRAWER_DATA":
      return {
        ...state,
        Drawer: action.payload,
      };
      default:
        return state;
    }
  };
  


  
  export const InputsReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_FORM_DATA:
        return {
          ...state,
          inputsdata: { ...state.inputsdata, ...action.payload },
        };
      case UPDATE_INPUT:
        return {
          ...state,
          inputsdata: {
            ...state.inputsdata,
            [action.payload.name]: action.payload.value,
          },
        };
      default:
        return state;
    }
  };
  
  