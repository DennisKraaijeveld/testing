const ExternalLinkComponent = ({ title, url }: any) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="text-content uppercase text-sm tracking-wide px-4 py-2 hover:bg-primary-grey/30 rounded-sm transition-all duration-200 ease-in-out"
  >
    {title}
  </a>
)

export default ExternalLinkComponent
