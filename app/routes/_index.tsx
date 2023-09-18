import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

export default function Index() {
  return (
    <div>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://designsystem.digital.gov"
            rel="noreferrer"
          >
            US Web Design System (USWDS)
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://trussworks.github.io/react-uswds/"
            rel="noreferrer"
          >
            USWDS React Components (<code>@trussworks/react-uswds</code>)
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  )
}
