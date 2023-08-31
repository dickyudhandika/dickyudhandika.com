export default function(req, res, next) {
    const redirects = [
      {
        from: "/", 
        to: "https://www.figma.com/file/dSf6NWpUKPp6cIhdAbwnZa/dickyudhandika.com?type=design&node-id=0%3A1&mode=design&t=1S3RxniiRlTnPFkh-1"
      }
    ]
    const redirect = redirects.find((r) => r.from === req.url)
    if (redirect) {
      res.writeHead(301, { Location: redirect.to })
      res.end()
    } else {
      next()
    }
  }