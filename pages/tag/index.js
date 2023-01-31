import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import TagForm from '../../components/TagForm';
import { deleteTag, getTags } from '../../api/tagData';

function TagsPage() {
  // const { user } = useAuth();
  const [tags, setTags] = useState([]);

  const getAllTags = () => {
    getTags().then(setTags);
  };

  useEffect(() => {
    getAllTags();
  }, []);

  const refresh = () => getAllTags();

  return (
    <>
      <TagForm refresh={refresh} />
      <h2>tags</h2>
      <Table striped bordered hover>
        <tbody>
          {
            tags?.map((tag) => (
              <tr key={tag.id}>
                <td>
                  <Link href={`/tag/edit/${tag.id}`} passhref="true">
                    <Button size="sm" className="m-3">
                      edit
                    </Button>
                  </Link>
                  <Button onClick={() => deleteTag(tag.id).then(() => getAllTags())} size="sm" className="m-3">delete</Button>
                </td>
                <td>{tag.label}</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </>
  );
}

export default TagsPage;
