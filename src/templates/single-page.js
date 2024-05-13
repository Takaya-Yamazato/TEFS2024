import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

const SinglePageTemplate = ({ theme, title, image, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
      <section className="section">
        <div className="container content">
          <div className="columns">
            <div className="column is-10 is-offset-1">
            <h1 className="title is-size-3 has-text-weight-bold">
                {theme}
              </h1>
              <h2 className="title is-size-2 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </section>
  );
};

SinglePageTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    theme: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const SinglePage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <SinglePageTemplate contentComponent={HTMLContent} theme={post.frontmatter.theme} title={post.frontmatter.title} image={post.frontmatter.image} content={post.html} />
    </Layout>
  );
};

SinglePage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SinglePage;

export const singlePageQuery = graphql`
  query SinglePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        theme
        image {
          childImageSharp {
            gatsbyImageData(width: 240, quality: 100, layout: CONSTRAINED)
          }
        }
      }
    }
  }
`;
