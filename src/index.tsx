import ReactDOM from 'react-dom/client'

import { Demo } from '~/features'
import './index.module.scss'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(<Demo>timeline</Demo>)
