import { EXPAND_ORGANIZATION } from '../actions';

const initialState = {
  orgs: [
    {
    name: "Recurse Ceneter",
    address: "455 Broadway",
    start_date: "May 22, 2017",
    end_date: "August 10, 2017",
    roles: [
      {title: "Recurser",
      description: "Learned a bunch of computer things. It was pretty neat. Pretty happy about it.",
      start_date: "May 22, 2017",
      end_date: "August 10, 2017",
      projects: [
        {name: "React App",
        description: "Built a React app with some hardcoded data",
        start_date: "July 1, 2017",
        end_date: null,
        skills: ["python", "javascript", "react", "redux", "api"]
        }
      ]}
    ]
  }
  ]
};

export default function organizations(state=initialState, action) {
  switch (action.type) {
    case EXPAND_ORGANIZATION:
      return {
        ...state
      };

    default:
      return state;
  }
}
