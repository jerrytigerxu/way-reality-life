const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const AUTOBUILD_INDEXES = true;




exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' })
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
    `)

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve('./src/templates/post.js'),
        context: {
          slug: node.fields.slug,
        },
      })
    })
}


{/*





exports.onCreateNode = ({node, getNode, actions}) => {
    if (node.internal.type === 'MarkdownRemark'){
      const fileNode = getNode(node.parent);
      // Programmatically create slug field and value, and append to node to be consumed by page creator
      // path should mirror md directory, and should be extracted
      let slug = createFilePath({node, getNode, basePath: ''});
      if (node.frontmatter && node.frontmatter.customPageSlug){
        // replace parsedName with customPageSlug
        slug = slug.replace((new RegExp(`\\/${fileNode.name}\\/$`)),`/${node.frontmatter.customPageSlug}/`);
      }
      actions.createNodeField({
        node,
        name: 'slug',
        value: slug
      });
    }
}


exports.createPages = async ({graphql, actions}) => {
  let subdirsWithIndexPages = [];
  let subdirIndexesToCreate = [];
  let subdirIndexPages = {};

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fileAbsolutePath
            fields {
              slug
            }
            parent {
              ... on File {
                relativePath
                base
                name
              }
            }
          }
        }
      }
      allDirectory(filter: {sourceInstanceName: {eq: "pages"}}, sort: {fields: name, order: ASC}) {
        nodes {
          absolutePath
          base
          relativeDirectory
          relativePath
          name
        }
      }
    }
  `);

  function recordAsChild(subdir, child, isDir){
  subdirIndexPages[subdir] = typeof(subdirIndexPages[subdir])==='object' ? subdirIndexPages[subdir] : {children:{
    dirs: [],
    md: []
  }}
  const target = isDir ? subdirIndexPages[subdir].children.dirs : subdirIndexPages[subdir].children.md;
  target.push(child);
}

result.data.allMarkdownRemark.edges.forEach(async ({node}) => {
  // Get dir of file
  const subdirAbs = path.dirname(node.fileAbsolutePath);
  // Note that this md file is child of dir
  recordAsChild(subdirAbs,node,false);
  // Create page for file itself
  actions.createPage({
    path: node.fields.slug,
    component: path.resolve(`./src/templates/post.js`),
    context: {
      // Becomes available as GraphQL variables within page queries
      slug: node.fields.slug
    }
  });
});
// Iterate over directories that contain MD, and check if they need an index page created
let directoryIteratorPromise = new Promise((resolve,reject) =>{
  result.data.allDirectory.nodes.forEach(async (node, index, arr)=>{
    const subdirAbs = node.absolutePath;
    const subdirRel = node.relativePath;
    const parentDir = path.posix.dirname(subdirAbs);
    // Note child of dir
    recordAsChild(parentDir,node,true);
    // Create page for subdir that file is in, if it is missing an index page. Skip for homepage ('/'), or top level page (/test.md)
    const alreadyHasIndexPage = (subdirsWithIndexPages.indexOf(subdirAbs)!==-1 || subdirRel === '');
    if (!alreadyHasIndexPage){
      // Check for index.md
      const indexPath = path.posix.join(subdirAbs,'index.md');
      const existResult = await graphql(`
      {
        allMarkdownRemark(filter: {fileAbsolutePath: {eq: "${indexPath}"}}) {
          totalCount
        }
      }`);
      if (existResult.data.allMarkdownRemark.totalCount <= 1) {
        console.log(`There is no index for ${indexPath}`);
        subdirIndexesToCreate.push(['']);
        subdirIndexesToCreate.push({
          subdirAbs: subdirAbs,
          subdirRel: subdirRel,
          parentDir: parentDir
        });
      }
      subdirsWithIndexPages.push(subdirAbs);
    }
    if (index === arr.length-1) resolve();
  });
});
if (AUTOBUILD_INDEXES){
  directoryIteratorPromise.then(()=>{
    console.log('=============== BUILDING SUBDIR INDEX PAGES! ======================');
    console.log(subdirIndexesToCreate);
    for (let x=0; x<subdirIndexesToCreate.length; x++){
      const subdirPaths = subdirIndexesToCreate[x];
      // Create index page!
      actions.createPage({
        path: subdirPaths.subdirRel,
        component: path.resolve(`./src/templates/directory-index.js`),
        context: {
          slug: subdirPaths.subdirRel,
          hasIndex: false,
          meta: subdirIndexPages[subdirPaths.subdirAbs]
        }
      });
    }
  });
}
}




*/}
