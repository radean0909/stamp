const range = (start, end) => new Array(end - start).fill(start).map((el, i) => start + i)

const events = ["8/9", "8/10", "8/13", "8/19", "8/25", "8/27", "8/28", "9/1", "9/2",]
const revenueData = events.map(e => {
  return {
    date: e,
    "Event Revenue": Math.floor(Math.random() * 500) + 100,
    "Merch Revenue": Math.floor(Math.random() * 500) + 125
  }
})

const campaignData = [
  {
    value: 335,
    name: "Website"
  },
  {
    value: 310,
    name: "Email"
  },
  {
    value: 234,
    name: "Ads"
  },
  {
    value: 135,
    name: "Video"
  },
  {
    value: 1548,
    name: "Search"
  }
]
const expenseData = [
  {
    value:  Math.floor(Math.random() * 1000) + 500,
    name: "Transportation"
  },
  {
    value:  Math.floor(Math.random() * 800) + 300,
    name: "Accomodations"
  },
  {
    value:  Math.floor(Math.random() * 500) + 200,
    name: "Booze"
  },
  {
    value:  Math.floor(Math.random() * 500) + 100,
    name: "Food"
  },
  {
    value:  Math.floor(Math.random() * 200) + 100,
    name: "Other"
  }
]

const StackMainData = [
  220,
  182,
  191,
  234,
  290,
  330,
  310,
  123,
  442,
  321,
  90,
  149,
  210,
  122,
  133,
  334,
  198,
  123,
  125,
  220
]
const StackData = StackMainData.map((item, key) => {
  return {
    label: key + "D",
    max: 500,
    sales: item
  }
})
const SinData = range(1, 12).map(i => {
  return {
    cate: "Cat" + i,
    value: (Math.sin(i / 5) * (i / 5 - 0.1) + i / 6) * 5
  }
})

export { revenueData, campaignData, expenseData, StackData, SinData }
