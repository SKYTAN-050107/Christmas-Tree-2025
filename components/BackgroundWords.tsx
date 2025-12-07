/// <reference types="@react-three/fiber" />
import React, { useMemo } from 'react';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

const WORD_COUNT = 8;
const PHRASE = "I love you Neo Jen Suen 🎄✨";

const BackgroundWords: React.FC = () => {
    // Generate positions in a single ring (circle) on the XZ plane
    const words = useMemo(() => {
        return new Array(WORD_COUNT).fill(0).map((_, i) => {
            const radius = 60; // Further away
            const angle = (i / WORD_COUNT) * Math.PI * 2;
            
            const x = radius * Math.cos(angle);
            const y = 0; // Keep it level with the tree base
            const z = radius * Math.sin(angle);
            
            return {
                id: i,
                position: new THREE.Vector3(x, y, z),
            };
        });
    }, []);

    return (
        <group>
            {words.map((word) => (
                <group key={word.id} position={word.position}>
                    {/* Make text look at center (0,0,0) so it's readable from inside */}
                    <Text
                        color="#FF1493" // Bright Pink
                        fontSize={2.5}
                        maxWidth={30}
                        lineHeight={1}
                        letterSpacing={0.1}
                        textAlign="center"
                        font="https://fonts.gstatic.com/s/indieflower/v17/m8JVjfKrXd_kj4LFnmLo8U1r.woff2" // Indie Flower font
                        anchorX="center"
                        anchorY="middle"
                        onUpdate={(self) => self.lookAt(0, 0, 0)}
                        fillOpacity={0.9}
                    >
                        {PHRASE}
                    </Text>
                </group>
            ))}
        </group>
    );
};

export default BackgroundWords;