const Items = [
  {
    timeString: "Just now",
    color: "primary",
    title: "Ate at Johnson's Corner",
    text: "Cinnamon rolls are dope! Right off the highway at a truck stop.",
    icon: "fa-wrench",
    type: "Pitstop"
  },
  {
    timeString: "Yesterday",
    color: "teal",
    title: "Show in Greeley, Colorado at the Atlas Theater",
    text: "Better than expected turnout, nice venue, paired with a country act though, which was weird.",
    icon: "fa-star",
    type: "Event"
  },
  {
    timeString: "3 days ago",
    color: "teal",
    title: "Show in Lawrence, Kansas at The Granada",
    text: "Fantastic Show! Was super hype, big crowd, great energy.",
    icon: "fa-wrench",
    type: "Event"
  },
  {
    timeString: "3 days ago",
    color: "primary",
    title: "Parked at Safeway.",
    text: "Solid tour van parking, easy access to highway and lots of restaurants nearby.",
    icon: "fa-wrench",
    type: "Pitstop"
  },
]

const getActivity = limit => {
  return limit ? Items.slice(0, limit) : Items
}

export default {
  getActivity
}
