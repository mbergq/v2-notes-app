type Props = {
  data: {
    notes: {
      id: string;
      title: string;
      content: string;
      background_color_id: number;
      created_at: string;
    }[];
  };
};

function Note({ data }: Props) {
  return <div data-cy="note-wrapper" id={data.notes[0].id}></div>;
}

export default Note;
