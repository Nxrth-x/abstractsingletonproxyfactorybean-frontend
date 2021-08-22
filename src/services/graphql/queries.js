import { gql } from '@apollo/client'

export const GET_USER_DATA_QUERY = gql`
  query GetSelf {
    getSelf {
      username
      firstName
      lastName
    }
  }
`

export const GET_LESSONS_DATA_QUERY = gql`
  query LessonByDay($day: String!) {
    lessonByDay(day: $day) {
      id
      url
      schedule
      subject {
        name
        teacher {
          id
          name
          imageUrl
        }
      }
    }
  }
`

export const GET_TASKS_QUERY = gql`
  query AllTasks {
    allTasks {
      id
      title
      attachments
      dueDate
      teacher {
        id
        name
        imageUrl
      }
    }
  }
`

export const GET_NOTICES_QUERY = gql`
  query AllNotices {
    allNotices {
      id
      title
      text
      teacher {
        id
        name
        imageUrl
      }
    }
  }
`

export const GET_ALL_LESSONS_QUERY = gql`
  query AllLessons {
    allLessons {
      id
      schedule
      weekDay
      url
      subject {
        name
      }
    }
  }
`

export const GET_TASK_QUERY = gql`
  query GetTask($uuid: UUID!) {
    task(uuid: $uuid) {
      id
      title
      description
      attachments
      dueDate
      teacher {
        id
        name
        imageUrl
        email
        about
      }
    }
  }
`
