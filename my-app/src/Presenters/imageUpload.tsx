import styled from 'styled-components';

const ImageUpload = styled.label`
  display: flex;
  width: 200px;
  height: 65px;
  border: 2px dashed gray;
  border-radius: 10px;
  background: white;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  margin:10px;
`;

const ImageInput = styled.input`
  display: none;
`;

export default function StyledImageUpload(props: { onImageUpload: (image: File) => void }) {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      props.onImageUpload(file);
    }
  };

  return (
    <ImageUpload>
      <p>Click or drag an image file here to upload</p>
      <ImageInput type="file" accept="image/*" onChange={handleFileChange} />
    </ImageUpload>
  );
}
