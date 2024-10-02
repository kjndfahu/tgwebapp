import ContentLoader from "react-content-loader";

function Skeleton(props){
    return (
        <ContentLoader
            speed={2}
            width={400}
            height={160}
            viewBox="0 0 400 160"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            {...props}
        >
            <rect x="11" y="70" rx="5" ry="5" width="357" height="59" />
        </ContentLoader>
    )
}

export default Skeleton