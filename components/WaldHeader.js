import Link from 'next/link'

export default function WaldHeader({page}) {

  return (
    <div style={{marginBottom: '-10px', textAlign: 'center'}}>
        {page == 'feed' ? <span style={{padding: '5px'}}>Feed</span> : <Link href='feed' style={{padding: '5px'}}>Feed</Link>}
        {page == 'profile' ? <span style={{padding: '5px'}}>Profile</span> : <Link href='profile' style={{padding: '5px'}}>Profile</Link>}
        {page == 'createPost' ? <span style={{padding: '5px'}}>Create Post</span> : <Link href='createPost' style={{padding: '5px'}}>Create Post</Link>}
        </div>)
}
