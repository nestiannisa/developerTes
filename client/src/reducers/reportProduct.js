import { SHOW_REPORT, SHOW_SUM, SHOW_AREA, SHOW_GRAPH } from "../action/reportProductAction";

let initialState = {
  showReportResult: false,
  showReportLoading: false,
  showReportError: false,

  showReportSumResult: false,
  showReportSumLoading: false,
  showReportSumError: false,

  showReportAreaResult: false,
  showReportAreaLoading: false,
  showReportAreaError: false,

  showReportGraphResult: {
    labels: [],
    datasets: [{
      label: "BTC",
      data: [],
      backgroundColor: 'rgba(238,175,0, 0.4)',
      borderColor: 'rgba(238,175,0, 0.5)',
      pointBorderColor: 'rgba(238,175,0, 0.7)'
    }]
  },
  showReportGraphLoading: false,
  showReportGraphError: false,
};

const reportProduct = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_REPORT:
      return {
        ...state,
        showReportResult: action.payload.data,
        showReportLoading: action.payload.loading,
        showReportError: action.payload.errorMessage,
      };
    
    case SHOW_SUM:
      return {
        ...state,
        showReportSumResult: action.payload.data,
        showReportSumLoading: action.payload.loading,
        showReportSumError: action.payload.errorMessage,
      };
    
    case SHOW_AREA:
      return {
        ...state,
        showReportAreaResult: action.payload.data,
        showReportAreaLoading: action.payload.loading,
        showReportAreaError: action.payload.errorMessage,
      };
    
    case SHOW_GRAPH:
      return {
        ...state,
        showReportAreaResult: {
          labels: action.payload.labels,
          datasets: [{
            label: "BTC",
            data: action.payload.data,
            backgroundColor: 'rgba(238,175,0, 0.4)',
            borderColor: 'rgba(238,175,0, 0.5)',
            pointBorderColor: 'rgba(238,175,0, 0.7)'
          }]
        },
        showReportAreaLoading: action.payload.loading,
        showReportAreaError: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default reportProduct;
