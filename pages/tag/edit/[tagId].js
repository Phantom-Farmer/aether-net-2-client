import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleTag } from '../../../api/tagData';
import TagForm from '../../../components/TagForm';

export default function EditTag() {
  const [editTag, setEditTag] = useState({});
  const router = useRouter();
  const { tagId } = router.query;
  useEffect(() => {
    getSingleTag(tagId).then(setEditTag);
  }, [tagId]);
  return (<TagForm object={editTag} />);
}
