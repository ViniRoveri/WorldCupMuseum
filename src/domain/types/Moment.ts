type Moment = {
   component: () => React.JSX.Element
   id: string
   minutes: string
   text: string
   title: string

   gameTitle?: string
   gameYear?: number
}

export default Moment