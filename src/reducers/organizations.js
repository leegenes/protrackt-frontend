import { EXPAND_ORGANIZATION } from '../actions';

const initialState = [
    {
    name: "Recurse Cneter",
    address: "455 Broadway",
    start_date: "May 22, 2017",
    end_date: "August 10, 2017",
    children: "roles",
    roles: [
      {name: "Recurser",
      description: "Learned a bunch of computer things. It was pretty neat. Pretty happy about it.",
      start_date: "May 22, 2017",
      end_date: "August 10, 2017",
      children: "projects",
      projects: [
        {name: "React App",
        description: "Built a React app with some hardcoded data",
        start_date: "July 1, 2017",
        end_date: null,
        children: null,
        skills: ["python", "javascript", "react", "redux", "api"]
        }
      ]}
    ]
  },
  {
  name: "Simple",
  address: "1615 SE 3rd Ave",
  start_date: "August 11, 2014",
  end_date: "May 1, 2017",
  children: "roles",
  roles: [
    {name: "People Operations Analyst",
    description: "HR World",
    start_date: "April 19, 2016",
    end_date: "May 1, 2017",
    children: "projects",
    projects: [
      {name: "Insurance",
      description: "Built a React app with some hardcoded data",
      start_date: "January 1, 2017",
      end_date: "May 1, 2017",
      children: null,
      skills: ["python", "javascript", "react", "redux", "api"]
    },
      {name: "Other things",
      description: "Some stuff",
      start_date: "January 1, 2016",
      end_date: "May 1, 2017",
      children: null,
      skills: ["python", "javascript", "react", "redux", "api"]
    }
    ]}
  ]
}
];

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
