import React from 'react'

import {
  // CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  // cibCcAmex,
  // cibCcApplePay,
  // cibCcMastercard,
  // cibCcPaypal,
  // cibCcStripe,
  // cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  // cifBr,
  // cifEs,
  // cifFr,
  // cifIn,
  // cifPl,
  // cifUs,
  cibTwitter,
  cilCloudDownload,
  // cilPeople,
  cilUser,
  cilUserFemale,
  cilPencil,
  cilColorBorder
} from '@coreui/icons'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import Pagination from '@mui/material/Pagination'



import WidgetsDropdown from '../widgets/WidgetsDropdown'

const Dashboard = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  const progressExample = [
    { title: 'Visits', value: '29.703 Users', percent: 40, color: 'success' },
    { title: 'Unique', value: '24.093 Users', percent: 20, color: 'info' },
    { title: 'Pageviews', value: '78.706 Views', percent: 60, color: 'warning' },
    { title: 'New Users', value: '22.123 Users', percent: 80, color: 'danger' },
    { title: 'Bounce Rate', value: 'Average Rate', percent: 40.15, color: 'primary' },
  ]

  const progressGroupExample1 = [
    { title: 'Monday', value1: 34, value2: 78 },
    { title: 'Tuesday', value1: 56, value2: 94 },
    { title: 'Wednesday', value1: 12, value2: 67 },
    { title: 'Thursday', value1: 43, value2: 91 },
    { title: 'Friday', value1: 22, value2: 73 },
    { title: 'Saturday', value1: 53, value2: 82 },
    { title: 'Sunday', value1: 9, value2: 69 },
  ]

  const progressGroupExample2 = [
    { title: 'Male', icon: cilUser, value: 53 },
    { title: 'Female', icon: cilUserFemale, value: 43 },
  ]

  const progressGroupExample3 = [
    { title: 'Organic Search', icon: cibGoogle, percent: 56, value: '191,235' },
    { title: 'Facebook', icon: cibFacebook, percent: 15, value: '51,223' },
    { title: 'Twitter', icon: cibTwitter, percent: 11, value: '37,564' },
    { title: 'LinkedIn', icon: cibLinkedin, percent: 8, value: '27,319' },
  ]

  
  const userTable = [
    {
      id: 1,
      sugarLevel: 100,
      weight: `${60} kg`,
      morMeal: 'Tea with Donaut',
      launch: 'Pizza',
      Dinner: 'Rice and Dal',
      exercise: `${20} min`,
    },
    {
      id: 2,
      sugarLevel: 100,
      weight: `${60} kg`,
      morMeal: 'Tea with Donaut',
      launch: 'Pizza',
      Dinner: 'Rice and Dal',
      exercise: `${20} min`,
    },
    {
      id: 3,
      sugarLevel: 100,
      weight: `${60} kg`,
      morMeal: 'Tea with Donaut',
      launch: 'Pizza',
      Dinner: 'Rice and Dal',
      exercise: `${20} min`,
    },
    {
      id: 4,
      sugarLevel: 100,
      weight: `${60} kg`,
      morMeal: 'Tea with Donaut',
      launch: 'Pizza',
      Dinner: 'Rice and Dal',
      exercise: `${20} min`,
    },
    {
      id: 5,
      sugarLevel: 100,
      weight: `${60} kg`,
      morMeal: 'Tea with Donaut',
      launch: 'Pizza',
      Dinner: 'Rice and Dal',
      exercise: `${20} min`,
    },
    {
      id: 6,
      sugarLevel: 100,
      weight: `${60} kg`,
      morMeal: 'Tea with Donaut',
      launch: 'Pizza',
      Dinner: 'Rice and Dal',
      exercise: `${20} min`,
    },
    {
      id: 7,
      sugarLevel: 100,
      weight: `${60} kg`,
      morMeal: 'Tea with Donaut',
      launch: 'Pizza',
      Dinner: 'Rice and Dal',
      exercise: `${20} min`,
    },
    {
      id: 8,
      sugarLevel: 100,
      weight: `${60} kg`,
      morMeal: 'Tea with Donaut',
      launch: 'Pizza',
      Dinner: 'Rice and Dal',
      exercise: `${20} min`,
    },
    {
      id: 9,
      sugarLevel: 100,
      weight: `${60} kg`,
      morMeal: 'Tea with Donaut',
      launch: 'Pizza',
      Dinner: 'Rice and Dal',
      exercise: `${20} min`,
    },
    {
      id: 10,
      sugarLevel: 100,
      weight: `${60} kg`,
      morMeal: 'Tea with Donaut',
      launch: 'Pizza',
      Dinner: 'Rice and Dal',
      exercise: `${20} min`,
    },
  ]

  return (
    <>
      <WidgetsDropdown />
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                Food Analysis
              </h4>
              <div className="small text-medium-emphasis">June - July 2022</div>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              <CButton color="primary" className="float-end">
                <CIcon icon={cilCloudDownload} />
              </CButton>
              <CButtonGroup className="float-end me-3">
                {['Day', 'Month', 'Year'].map((value) => (
                  <CButton
                    color="outline-secondary"
                    key={value}
                    className="mx-0"
                    active={value === 'Month'}
                  >
                    {value}
                  </CButton>
                ))}
              </CButtonGroup>
            </CCol>
          </CRow>
          <CChartLine
            style={{ height: '300px', marginTop: '40px' }}
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [
                {
                  label: 'My First dataset',
                  backgroundColor: hexToRgba(getStyle('--cui-info'), 10),
                  borderColor: getStyle('--cui-info'),
                  pointHoverBackgroundColor: getStyle('--cui-info'),
                  borderWidth: 2,
                  data: [
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                  ],
                  fill: true,
                },
                {
                  label: 'My Second dataset',
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-success'),
                  pointHoverBackgroundColor: getStyle('--cui-success'),
                  borderWidth: 2,
                  data: [
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                  ],
                },
                {
                  label: 'My Third dataset',
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-danger'),
                  pointHoverBackgroundColor: getStyle('--cui-danger'),
                  borderWidth: 1,
                  borderDash: [8, 5],
                  data: [65, 65, 65, 65, 65, 65, 65],
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  grid: {
                    drawOnChartArea: false,
                  },
                },
                y: {
                  ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    stepSize: Math.ceil(250 / 5),
                    max: 250,
                  },
                },
              },
              elements: {
                line: {
                  tension: 0.4,
                },
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                  hoverBorderWidth: 3,
                },
              },
            }}
          />
        </CCardBody>
        <CCardFooter>
          <CRow xs={{ cols: 1 }} md={{ cols: 5 }} className="text-center">
            {progressExample.map((item, index) => (
              <CCol className="mb-sm-2 mb-0" key={index}>
                <div className="text-medium-emphasis">{item.title}</div>
                <strong>
                  {item.value} ({item.percent}%)
                </strong>
                <CProgress thin className="mt-2" color={item.color} value={item.percent} />
              </CCol>
            ))}
          </CRow>
        </CCardFooter>
      </CCard>

      {/* <WidgetsBrand withCharts /> */}

      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Food Recomendation</CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-info py-1 px-3">
                        <div className="text-medium-emphasis small">New Clients</div>
                        <div className="fs-5 fw-semibold">9,123</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Recurring Clients</div>
                        <div className="fs-5 fw-semibold">22,643</div>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />
                  {progressGroupExample1.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-prepend">
                        <span className="text-medium-emphasis small">{item.title}</span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="info" value={item.value1} />
                        <CProgress thin color="danger" value={item.value2} />
                      </div>
                    </div>
                  ))}
                </CCol>

                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-warning py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Pageviews</div>
                        <div className="fs-5 fw-semibold">78,623</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Organic</div>
                        <div className="fs-5 fw-semibold">49,123</div>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />

                  {progressGroupExample2.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">{item.value}%</span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="warning" value={item.value} />
                      </div>
                    </div>
                  ))}

                  <div className="mb-5"></div>

                  {progressGroupExample3.map((item, index) => (
                    <div className="progress-group" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">
                          {item.value}{' '}
                          <span className="text-medium-emphasis small">({item.percent}%)</span>
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="success" value={item.percent} />
                      </div>
                    </div>
                  ))}
                </CCol>
              </CRow>

              <br />

              <CCardHeader>Your Activity</CCardHeader>

              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">S.N</CTableHeaderCell>
                    <CTableHeaderCell>Sugar Level</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Weight</CTableHeaderCell>
                    <CTableHeaderCell>Morning Meal</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Launch</CTableHeaderCell>
                    <CTableHeaderCell>Dinner</CTableHeaderCell>
                    <CTableHeaderCell>Exercise</CTableHeaderCell>
                    <CTableHeaderCell>Action</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {userTable.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">{item.id}</CTableDataCell>
                      <CTableDataCell>{item.sugarLevel}</CTableDataCell>
                      <CTableDataCell className="text-center">{item.weight}</CTableDataCell>
                      <CTableDataCell>{item.morMeal}</CTableDataCell>
                      <CTableDataCell className="text-center">{item.launch}</CTableDataCell>
                      <CTableDataCell>{item.Dinner}</CTableDataCell>
                      <CTableDataCell>{item.exercise}</CTableDataCell>
                      <CTableDataCell><DriveFileRenameOutlineIcon/></CTableDataCell>
                      <CTableDataCell>
                     
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
              <div  className="mt-3 d-flex justify-content-center">

                  <Pagination count={Infinity} variant="outlined" color="primary"  />
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
