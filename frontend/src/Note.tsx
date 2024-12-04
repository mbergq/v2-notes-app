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
  return <div>My note component</div>;
}

export default Note;
