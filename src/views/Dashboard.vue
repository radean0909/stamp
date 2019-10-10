<template>
  <div id="pageDashboard">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <!-- map -->
        <v-flex lg12 >
          <v-sheet height="400px">
            <g-map></g-map>
          </v-sheet>
        </v-flex>
        <!-- map end -->
        <!-- mini statistic start
        <!-- 
        <v-flex lg3 sm6 xs12>
          <mini-statistic icon="fa fa-facebook" title="100+" sub-title="Likes" color="indigo"> </mini-statistic>
        </v-flex>
        <v-flex lg3 sm6 xs12>
          <mini-statistic icon="fa fa-google" title="150+" sub-title="Connections" color="red"> </mini-statistic>
        </v-flex>
        <v-flex lg3 sm6 xs12>
          <mini-statistic icon="fa fa-twitter" title="200+" sub-title="Followers" color="light-blue"> </mini-statistic>
        </v-flex>
        <v-flex lg3 sm6 xs12>
          <mini-statistic icon="fa fa-instagram" title="50+" sub-title="Shots" color="purple"> </mini-statistic>
        </v-flex> 
        -->
        <!-- mini statistic  end -->
        <v-flex lg8 sm12 xs12>
          <v-widget title="Event Revenue" content-bg="white">
            <v-btn icon slot="widget-header-action">
              <v-icon class="text--secondary">refresh</v-icon>
            </v-btn>
            <div slot="widget-content">
              <e-chart
                :path-option="[
                  ['dataset.source', revenueData],
                  ['color', [color.lightBlue.base, color.green.lighten1]],
                  ['legend.show', true],
                  ['xAxis.axisLabel.show', true],
                  ['yAxis.axisLabel.show', true],
                  ['grid.left', '2%'],
                  ['grid.bottom', '5%'],
                  ['grid.right', '3%'],
                  ['series[0].type', 'bar'],
                  ['series[0].areaStyle', {}],
                  ['series[0].smooth', true],
                  ['series[1].smooth', true],
                  ['series[1].type', 'bar'],
                  ['series[1].areaStyle', {}]
                ]"
                height="400px"
                width="90%"
              >
              </e-chart>
            </div>
          </v-widget>
        </v-flex>
        <v-flex lg4 sm12 xs12>
          <v-widget title="Expense Breakdown" content-bg="white">
            <div slot="widget-content">
              <e-chart
                :path-option="[
                  ['dataset.source', expenseData],
                  ['legend.bottom', '0'],
                  [
                    'color',
                    [
                      color.lightBlue.base,
                      color.indigo.base,
                      color.pink.base,
                      color.green.base,
                      color.cyan.base,
                      color.teal.base
                    ]
                  ],
                  ['xAxis.show', false],
                  ['yAxis.show', false],
                  ['series[0].type', 'pie'],
                  ['series[0].avoidLabelOverlap', true],
                  ['series[0].radius', ['50%', '70%']]
                ]"
                height="400px"
                width="100%"
              >
              </e-chart>
            </div>
          </v-widget>
        </v-flex>
        <!-- social/weather card start -->
        <v-flex lg4 sm12 xs12>
          <profile-card> </profile-card>
        </v-flex>
        <v-flex lg4 sm12 xs12>
          <box-chart
            card-color="indigo"
            title="Mentions and Hashtags"
            sub-title="15%"
            icon="trending_up"
            :data="revenueData"
            :chart-color="[color.indigo.lighten1]"
            type="line"
          >
          </box-chart>
          <box-chart
            class="mt-4"
            card-color="green"
            title="Page views"
            sub-title="10%"
            icon="trending_up"
            :data="revenueData"
            :chart-color="[color.green.darken1, 'rgba(255,255,255,0.6)']"
            gradient
            type="area"
          >
          </box-chart>
        </v-flex>
        <v-flex lg4 sm12 xs12>
          <v-widget title="Notes" content-bg="white">
            <div slot="widget-content">
              <v-timeline dense align-top>
                <v-timeline-item v-for="(item, index) in activity" :key="index" :icon="item.icon" :color="item.color">
                  <v-card :color="item.color">
                    <v-card-title>{{item.title}}</v-card-title>
                    <v-card-text class="white text--primary">
                      <time datetime="2018" class="subheading">{{ item.timeString }}</time>
                      <p>{{ item.text }}</p>
                    </v-card-text>
                  </v-card>
                </v-timeline-item>
              </v-timeline>
            </div>
          </v-widget>
        </v-flex>
        <v-flex lg12 sm12 xs12>
          <post-list-card :items="posts"></post-list-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import API from "@/api"
import EChart from "@/components/chart/echart"
import MiniStatistic from "@/components/widgets/statistic/MiniStatistic"
import PostListCard from "@/components/widgets/card/PostListCard"
import ProfileCard from "@/components/widgets/card/ProfileCard"
import PostSingleCard from "@/components/widgets/card/PostSingleCard"
import WeatherCard from "@/components/widgets/card/WeatherCard"
import PlainTable from "@/components/widgets/list/PlainTable"
import PlainTableOrder from "@/components/widgets/list/PlainTableOrder"
import VWidget from "@/components/VWidget"
import Material from "vuetify/es5/util/colors"
import VCircle from "@/components/circle/VCircle"
import BoxChart from "@/components/widgets/chart/BoxChart"
import ChatWindow from "@/components/chat/ChatWindow"
import CircleStatistic from "@/components/widgets/statistic/CircleStatistic"
import LinearStatistic from "@/components/widgets/statistic/LinearStatistic"
import GMap from "@/components/widgets/map/GMap"
export default {
  components: {
    VWidget,
    MiniStatistic,
    ChatWindow,
    VCircle,
    WeatherCard,
    PostSingleCard,
    PostListCard,
    ProfileCard,
    EChart,
    BoxChart,
    CircleStatistic,
    LinearStatistic,
    PlainTable,
    PlainTableOrder,
    GMap
  },
  data: () => ({
    color: Material,
    selectedTab: "tab-1",
    linearTrending: [
      {
        subheading: "Sales",
        headline: "2,55",
        caption: "increase",
        percent: 15,
        icon: {
          label: "trending_up",
          color: "success"
        },
        linear: {
          value: 15,
          color: "success"
        }
      },
      {
        subheading: "Revenue",
        headline: "6,553",
        caption: "increase",
        percent: 10,
        icon: {
          label: "trending_down",
          color: "error"
        },
        linear: {
          value: 15,
          color: "error"
        }
      },
      {
        subheading: "Orders",
        headline: "5,00",
        caption: "increase",
        percent: 50,
        icon: {
          label: "arrow_upward",
          color: "info"
        },
        linear: {
          value: 50,
          color: "info"
        }
      }
    ],
    trending: [
      {
        subheading: "Email",
        headline: "15+",
        caption: "email opens",
        percent: 15,
        icon: {
          label: "email",
          color: "info"
        },
        linear: {
          value: 15,
          color: "info"
        }
      },
      {
        subheading: "Tasks",
        headline: "90%",
        caption: "tasks completed.",
        percent: 90,
        icon: {
          label: "list",
          color: "primary"
        },
        linear: {
          value: 90,
          color: "success"
        }
      },
      {
        subheading: "Issues",
        headline: "100%",
        caption: "issues fixed.",
        percent: 100,
        icon: {
          label: "bug_report",
          color: "primary"
        },
        linear: {
          value: 100,
          color: "error"
        }
      }
    ]
  }),
  computed: {
    activity() {
      return API.getActivity()
    },
    posts() {
      return API.getPost(3)
    },
    expenseData() {
      return API.getExpenseData
    },
    revenueData() {
      return API.getRevenueData
    }
  }
}
</script>
