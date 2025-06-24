import { useState } from 'react';
import { useAuth } from '../../lib/auth/AuthContext';
import { adminApi } from '../../lib/api/admin';
import type { Content } from '../../types';

interface ContentEditorProps {
  content: Content;
  onUpdate: () => void;
}

export function ContentEditor({ content, onUpdate }: ContentEditorProps) {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(content);

  if (!user?.role === 'admin') return null;

  const handleSave = async () => {
    try {
      await adminApi.updateContent(content.id, editedContent);
      setIsEditing(false);
      onUpdate();
    } catch (error) {
      console.error('Error updating content:', error);
    }
  };

  if (!isEditing) {
    return (
      <div className="relative group">
        {content.type === 'text' ? (
          <div>{content.content}</div>
        ) : (
          <img src={content.imageUrl} alt={content.title} />
        )}
        <button
          onClick={() => setIsEditing(true)}
          className="absolute top-2 right-2 bg-green-600 text-white p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity"
        >
          Editar
        </button>
      </div>
    );
  }

  return (
    <div className="border p-4 rounded-lg">
      <div className="space-y-4">
        <input
          type="text"
          value={editedContent.title}
          onChange={(e) => setEditedContent({ ...editedContent, title: e.target.value })}
          className="w-full p-2 border rounded"
          placeholder="Título"
        />
        {content.type === 'text' ? (
          <textarea
            value={editedContent.content}
            onChange={(e) => setEditedContent({ ...editedContent, content: e.target.value })}
            className="w-full p-2 border rounded"
            rows={4}
          />
        ) : (
          <input
            type="url"
            value={editedContent.imageUrl}
            onChange={(e) => setEditedContent({ ...editedContent, imageUrl: e.target.value })}
            className="w-full p-2 border rounded"
            placeholder="URL de la imagen"
          />
        )}
        <div className="flex justify-end gap-2">
          <button
            onClick={() => setIsEditing(false)}
            className="px-4 py-2 text-gray-600 border rounded hover:bg-gray-50"
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
}